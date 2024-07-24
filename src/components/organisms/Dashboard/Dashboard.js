import Header from "../../molecules/header/Header";
import './style.css';
import DashboardHeader from "../../molecules/Dashboardheader/Header";
import DashboardTable from "../../molecules/Table/Table";
import StatCards from "../../molecules/StatCard/StatCard";
import { Container, Box } from '@mui/material';
import SummaryCard from "../../molecules/SummaryCard/SummaryCard";
import PopUp from "../../molecules/PopUp/PopUp";
import EggList from "../../molecules/EggList/EggList";

export const Dashboard =()=>{

    return(
        <>
        <div style={{ marginLeft: '250px', padding: '20px' ,width:'80vw'}}>
        {/* Your main content goes here */}
        <div style={{float:'right'}}>
            <Header/>

        </div>
        <div className="dashboard-content" >
            <DashboardHeader/>
            <StatCards/>
        <Container>
      <Box my={4}>
        <SummaryCard />
      </Box>
    </Container>

        <DashboardTable/>
        <PopUp/>
       
        </div>
      </div>
      </>
    )
}