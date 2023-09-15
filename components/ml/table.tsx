import styled from "styled-components";

interface ResTableProps {
  sentimentLabels: number[] // Updated prop to include sentimentLabels
}

export function ResTable({ sentimentLabels }: ResTableProps) {
  // Count the number of sentiment labels for each category
  const countNegative = sentimentLabels.filter((label) => label === 0).length
  const countPositive = sentimentLabels.filter((label) => label === 1).length
  const countNeutral = sentimentLabels.filter((label) => label === 2).length

  return (
    <Table>
      <div className="cardType">
        <p>Sad</p>
        <p>
          {countNegative} -{" "}
          {((countNegative / sentimentLabels.length) * 100).toFixed(2)}%
        </p>
      </div>
      <div className="cardType">
        <p>Happy</p>
        <p>
          {countPositive} -{" "}
          {((countPositive / sentimentLabels.length) * 100).toFixed(2)}%
        </p>
      </div>
      <div className="cardType">
        <p>Neutral</p>
        <p>
          {countNeutral} -{" "}
          {((countNeutral / sentimentLabels.length) * 100).toFixed(2)}%
        </p>
      </div>
    </Table>
  )
}

const Table = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  flex-wrap: wrap;

  .cardType {
    border-radius: 20px;
    width: 18rem;
    padding: 1.2rem;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
  }

  .cardType:nth-child(1) {
    background-color: #ff5236; /* Color for the first card */
  }

  .cardType:nth-child(2) {
    background-color: #1fdb25; /* Color for the second card */
  }

  .cardType:nth-child(3) {
    background-color: #1c76f7; /* Color for the third card */
  }
`