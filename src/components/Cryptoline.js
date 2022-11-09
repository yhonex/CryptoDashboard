import { CircularProgress } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import "chart.js/auto";
import { CryptosState } from "../context/Cryptocontex";

const ContainerChart = styled.div`
  width: 50vw;
  display: "flex";

  align-items: "center";
  justify-content: "center";
  margin-top: 10px;
  padding: 10px;
`;

const Cryptoline = () => {
  const { ethereumData, hitoricalData, days, currency } = CryptosState();

  return (
    <ContainerChart>
      {!hitoricalData | !ethereumData ? (
        <CircularProgress style={{ color: "gold" }} size={150} thickness={1} />
      ) : (
        <>
          <Line
            data={{
              labels: ethereumData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: hitoricalData.map((coin) => coin[1]),
                  label: `Price BIT( Past ${days} Days ) in ${currency}`,
                  borderColor: "#EEBC1D",
                },
                {
                  data: ethereumData.map((coin) => coin[1]),
                  label: `Price ETH ( Past ${days} Days ) in ${currency}`,
                  borderColor: "#A330FF",
                },
              ],
            }}
          />
        </>
      )}
    </ContainerChart>
  );
};

export default Cryptoline;
