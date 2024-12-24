import React, { useEffect } from "react";
import * as SQLite from "expo-sqlite";

// Cast untuk menghindari error "openDatabase"
const db = (SQLite as any).openDatabase("travelin.db");

const App = () => {
  useEffect(() => {
    db.transaction((tx: any) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS destinations (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, image TEXT);",
        [],
        () => console.log("Table created successfully"),
        (_: any, error: any) => {
          console.log("Error creating table:", error);
          return true; // Untuk mengindikasikan kegagalan transaksi
        }
      );
    });
  }, []);

  return null; // Kode UI Anda dapat ditambahkan di sini
};

export default App;
