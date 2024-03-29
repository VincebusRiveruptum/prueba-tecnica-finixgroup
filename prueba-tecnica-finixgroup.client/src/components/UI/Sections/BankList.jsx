import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchBanksAsync } from '../../../store/bankSlice'; 
import BankListTable from "../Elements/BankListTable";
import SearchBankMenu from "../Elements/SearchBankMenu";
// Assets
export default function BankList() {
  const [y, setY] = useState(window.scrollY);
    const bankList = useSelector((state) => state.bankList.items);
    const status = useSelector((state) => state.bankList.status);
    const dispatch = useDispatch();

    useEffect(() => {
      
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
    }, [y]);

    useEffect(() => {
        dispatch(fetchBanksAsync());
    }, [dispatch]);

  return (
    <Wrapper id="home" className="lightBg">
          <SearchBankMenu dispatch={dispatch}>
          </SearchBankMenu>
        
        <BankListSection>
              <Title className="font30 semiBold">Banks</Title>
              {status === 'loading' && <div>Loading...</div>} 
              {status === 'failed' && <div>Error fetching banks</div>}
              {!bankList && status !== 'loading' && <div>No available banks</div>}
              <BankListTable bankList={bankList} />
        </BankListSection>

    </Wrapper>
  );
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 2%; 
    margin-top: 80px; /* Adjust for the maximum height of your navbar */

`;

const BankListSection = styled.div`
  display: flex;
  padding:2%;
  flex-direction:column;
  justify-content:center;
  padding: 5%;
  @media (max-width: 760px) {
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 760px) {
      justify-content: center;
  }
`;

