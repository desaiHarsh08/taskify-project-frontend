import { useState } from "react";
import { Button } from "./ui/button";
import axiosInstance from "@/utils/api";

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    console.log("click");
    setLoading(true);
    const response = await axiosInstance.get("/todosa");
    setData(response.data);
    setLoading(false);
  };

  return (
    <div>
      <Button type="button" onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </Button>

      {data ? (
        <div>
          <h3>Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default MyComponent;
