//landing, câteva produse featured
import { useEffect, useState } from "react";
import Spinner from "../components/ui/Spinner";
import PageLayout from "../components/layout/PageLayout";

export const HomePage = () => {
  return (
    <PageLayout>
      <div className="text-center">
        <h1>Welcome to Allfactive</h1>
        <p>Your one-stop shop for all your fragrance needs!</p>
      </div>
    </PageLayout>
  );
};
