import React, { useState } from 'react';
import styled from "styled-components";
import FullButton from '../Buttons/FullButton';
import ModifyModal from './ModifyModal';
import RemoveBankModal from './RemoveBankModal';

export default function BankListTable({ bankList }) {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = bankList.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(bankList.length / itemsPerPage);

    const handleRemove = () => {
        setVisibleRemoveModal(true);
    }

    const handleModify = () => {
        setVisibleModifyModal(true);
    }

    return (
        <Wrapper className="container font14">
            <TableBox>
                <Table className="shadow">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Bank Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(bank => (
                            <tr key={bank.id}>
                                <td>{bank.id}</td>
                                <td>{bank.bank_name}</td>
                                <td>
                                    <FullButton action={() => handleRemove()} color="#505050" title="Remove"></FullButton>
                                    <FullButton action={() => handleModify()} color="#505050" title="Modify"></FullButton>
                                    <ModifyModal bank={bank} />
                                    <RemoveBankModal bank={bank} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableBox>

            <PaginationBox>
                <Title className="font18 semiBold">Showing { itemsPerPage } results of { bankList.length - 1 }</Title>
                <Pagination>                   
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                    <span>{currentPage} / {totalPages}</span>
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                </Pagination>
            </PaginationBox>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    width:100%;
    padding:2%;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }
`;

const Title = styled.div`
  display: flex;
      justify-content: center;
  @media (max-width: 760px) {
    justify-content: center;
  }
`;
const TableBox = styled.div`
    padding-bottom:5%;
`;

const PaginationBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    padding:2%;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;

    button {
        margin: 0 5px;
        padding: 5px 10px;
        cursor: pointer;
    }
`;