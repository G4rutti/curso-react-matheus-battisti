import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocument = async () => {
      setLoading(true)
      try {
        const docRef = await doc(db, docCollection, id)
        const docSnap = await getDoc(docRef)
        setDocument(docSnap.data())
        setLoading(false)
      } catch (error) {
        console.log(error)
        setError(error.message)
        setLoading(false)
      }
    };

    fetchDocument();
  }, [docCollection, id]);

  return { document, loading, error };
};
