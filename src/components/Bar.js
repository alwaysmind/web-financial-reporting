import { Bar } from "react-chartjs-2";

const Chart = ({ dataset }) => {

    return (
        <div className="bg-white rounded-lg p-3 box-border mt-3">
            <Bar
                width={"100%"}
                height={"50px"}
                data={dataset}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "From 7 days ago"
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }
                }}
            />
        </div>
    );
};

export default Chart