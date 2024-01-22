import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export const useDeleteDocument = (docCollection) => {
  const deleteReducer = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return { loading: true, error: null };
      case "DELETED_DOC":
        return { loading: false, error: null };
      case "ERROR":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [response, dispatch] = useReducer(deleteReducer, {
    loading: null,
    error: null,
  });

  const deleteDocument = async (id) => {
    let cancelled = false; // Mova a declaração para dentro da função deleteDocument
    dispatch({ type: "LOADING" });

    try {
      if (cancelled) {
        throw new Error("Operation cancelled");
      }

      const deletedDocument = await deleteDoc(doc(db, docCollection, id));

      if (!cancelled) {
        dispatch({ type: "DELETED_DOC", payload: deletedDocument });
      }
    } catch (error) {
      if (!cancelled) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    }
  };

  useEffect(() => {
    let cancelled = false; // Defina a variável também aqui para o caso de cancelamento posterior

    return () => {
      cancelled = true;
    };
  }, []);

  return { deleteDocument, response };
};