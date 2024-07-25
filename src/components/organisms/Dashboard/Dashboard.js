
import './style.css';
import DashboardHeader from "../../molecules/Dashboardheader/Header";
import DashboardTable from "../../molecules/Table/Table";
import StatCards from "../../molecules/StatCard/StatCard";
import { Container, Box } from '@mui/material';
import SummaryCard from "../../molecules/SummaryCard/SummaryCard";
import IncubationTable from '../../molecules/IncubationTable/IncubationTable';


export const Dashboard = () => {

    return (
        <>
            <div style={{ marginLeft: '250px', padding: '20px', width: '80vw' }} className="container">
               
                
                <div className="dashboard-content" >
                    <DashboardHeader />
                    <StatCards />
                    <Container>
                        <Box my={4}>
                            <SummaryCard />
                        </Box>
                    </Container>
                    <DashboardTable />
                    
                </div>
            </div>
        </>
    )
}