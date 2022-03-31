import { useState } from "react";
import axios from "axios";

const App = () => {
    const [data, setData] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.get(
                "https://newsapi.org/v2/top-headlines?country=kr&apikey=4f46e736be174af89f54440638fe7956"
            );
            setData(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <>
            <div>
                <button onClick={onClick}>불러오기</button>
                {data && (
                    <textarea
                        rows={7}
                        value={JSON.stringify(data, null, 2)}
                        readOnly={true}
                    />
                )}
            </div>
        </>
    );
};

export default App;
