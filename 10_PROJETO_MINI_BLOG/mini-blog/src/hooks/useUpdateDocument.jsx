import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

export const useUpdateDocument = (docCollection) => {
  const updateReducer = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return { loading: true, error: null };
      case "UPDATED_DOC":
        return { loading: false, error: null };
      case "ERROR":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [response, dispatch] = useReducer(updateReducer, {
    loading: null,
    error: null,
  });

  const updateDocument = async (id, data, cancelled) => {
    dispatch({ type: "LOADING" });

    try {
      if (cancelled) {
        throw new Error("Operation cancelled");
      }

      const docRef = await doc(db, docCollection, id)
      const updatedDocument = await updateDoc(docRef, data)

      if (!cancelled) {
        dispatch({ type: "UPDATED_DOC", payload: updatedDocument });
      }
    } catch (error) {
      if (!cancelled) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    }
  };

  useEffect(() => {
    let cancelled = false;

    return () => {
      cancelled = true;
    };
  }, []);

  return { updateDocument: (document) => updateDocument(document), response };
};
