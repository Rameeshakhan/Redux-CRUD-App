import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/action';

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const Home = () => {

    const navigate = useNavigate()
    let dispatch = useDispatch()
    const {users} = useSelector(state=> state.users)
    useEffect(()=>{
        dispatch(loadUsers())
    }, [])

    const handleAddUSer = () => {
        navigate("/adduser")
    }

    const handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete ?")){
            dispatch(deleteUser(id))
        }
    }

    return (
        <div style={{ textAlign: "center", margin: "50px" }}>
            <h2>CRUD Operation Using Redux</h2>
            <Button variant="contained" sx={{ margin: "10px", marginRight: "-650px" }} onClick={handleAddUSer}>Add User</Button>
            <TableContainer component={Paper} sx={{ marginTop: "90px", width: 800, margin: "auto", }}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead sx={{backgroundColor: "#E5E5E5"}}> 
                        <TableRow >
                            <TableCell sx={{fontWeight: "700"}}>Name</TableCell>
                            <TableCell sx={{fontWeight: "700"}}>Email</TableCell>
                            <TableCell sx={{fontWeight: "700"}}>Contact</TableCell>
                            <TableCell sx={{fontWeight: "700"}}>Address</TableCell>
                            <TableCell sx={{fontWeight: "700"}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users&& users.map((user) => (
                            <TableRow
                                key={user.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {user.name}
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.contact}</TableCell>
                                <TableCell>{user.address}</TableCell>
                                <TableCell>
                                    <Stack direction="row" spacing={2} >
                                        <IconButton aria-label="delete" onClick={() => handleDelete(user.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton aria-label="edit" onClick={() => navigate(`/edituser/${user.id}`)}>
                                            <EditIcon />
                                        </IconButton>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home