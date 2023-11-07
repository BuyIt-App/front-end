import React from "react";
import Table from "react-bootstrap/Table";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
export default function Delivery() {
  const columnCellStyle = {
    paddingLeft: "50px", // Add left padding to create space between columns
    paddingRight: "50px", // Add right padding to create space between columns
  };

  return (
    <div>
      <div
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          color: "#510c72",
          marginBottom: "50px",
          marginTop: "100px",
        }}
      >
        Available Deliveries
      </div>

      <div>
        <Table responsive="lg">
          <thead style={{ backgroundColor: "lightblue", fontSize: "20px" }}>
            <tr>
              <th style={columnCellStyle}>Products</th>
              <th style={columnCellStyle}>Items</th>
              <th style={columnCellStyle}>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={columnCellStyle}>rocel bath tub</td>
              <td style={columnCellStyle}>25</td>
              <td style={columnCellStyle}>400,000.00</td>
              <td style={columnCellStyle}>
                <MdEdit />
              </td>
              <td style={columnCellStyle}>
                <MdDelete />
              </td>
            </tr>

            <tr>
              <td style={columnCellStyle}>rocel bath tub</td>
              <td style={columnCellStyle}>25</td>
              <td style={columnCellStyle}>400,000.00</td>
              <td style={columnCellStyle}>
                <MdEdit />
              </td>
              <td style={columnCellStyle}>
                <MdDelete />
              </td>
            </tr>

            <tr>
              <td style={columnCellStyle}>rocel bath tub</td>
              <td style={columnCellStyle}>25</td>
              <td style={columnCellStyle}>400,000.00</td>
              <td style={columnCellStyle}>
                <MdEdit />
              </td>
              <td style={columnCellStyle}>
                <MdDelete />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
