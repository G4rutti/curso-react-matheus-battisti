import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search=null, uid=null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let q
        const collectionRef = collection(db, docCollection);
        if(search){
          q = query(collectionRef, 
          where("tags", "array-contains", search), 
          orderBy('createdAt', 'desc'));
        }else if(uid){
          q = query(collectionRef, 
          where("uid", "==", uid), 
          orderBy('createdAt', 'desc'));
        }
        else{
          q = query(collectionRef, orderBy('createdAt', 'desc'));
        }

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
          setLoading(false);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching documents:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [docCollection, search, uid]);

  return { documents, loading, error };
};
