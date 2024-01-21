import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const useInsertDocument = (docCollection) => {
  const insertReducer = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return { loading: true, error: null };
      case "INSERTED_DOC":
        return { loading: false, error: null };
      case "ERROR":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [response, dispatch] = useReducer(insertReducer, {
    loading: null,
    error: null,
  });

  const insertDocument = async (document, cancelled) => {
    dispatch({ type: "LOADING" });

    try {
      if (cancelled) {
        throw new Error("Operation cancelled");
      }

      const newDocument = { ...document, createdAt: Timestamp.now() };
      const insertedDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );

      if (!cancelled) {
        dispatch({ type: "INSERTED_DOC", payload: insertedDocument });
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

  return { insertDocument: (document) => insertDocument(document), response };
};
