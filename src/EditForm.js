import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Slide,
    TextField
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

function EditForm({maximo, ECPorDia, onMaximoChange, onECPorDiaChange, editPV, onEditPV}) {


    const handleMaximoChange = (event) => {
        const newMaximo = parseInt(event.target.value)
        onMaximoChange(newMaximo)
    }

    const handleECPorDiaChange = (event) => {
        const nuevoECPorDia = parseInt(event.target.value)
        onECPorDiaChange(nuevoECPorDia)
    }

    const form = (
        <Paper
            sx={{
                p: 2,
                bgcolor: 'lightgrey',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
                padding: "10px",
                m: 1
            }}
            elevation={24}>
            <Grid2
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                component="form"
                /*sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                }}*/>
                <Grid2 xs={5}>
                    <FormControl>
                        <TextField
                            inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                            value={maximo}
                            onChange={handleMaximoChange}
                            size="small"
                            label="PV Max"
                        />
                    </FormControl>
                </Grid2>
                <Grid2 xs={5}>
                    <FormControl fullWidth>
                        <InputLabel>EC/Dia:</InputLabel>
                        <Select
                            value={ECPorDia}
                            label="EC/Dia:"
                            onChange={handleECPorDiaChange}
                            size="small"
                        >
                            {
                                [...Array(15)].map((_, i) => i + 1)
                                    .map(i => <MenuItem key={i} value={i}>{i}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Grid2>
                <Grid2 xs={2}>
                    <IconButton color="primary" onClick={onEditPV}>
                        <FontAwesomeIcon icon={['fas', 'check']} size="xl"/>
                    </IconButton>
                </Grid2>
            </Grid2>
        </Paper>
    );

    const editButton = <div className={'PV-edit-button-container'}>
        <button className={'PV-buttons edit-button'} onClick={onEditPV}>
            <FontAwesomeIcon icon={['fas', 'edit']} size="lg"/>
        </button>
    </div>;

    return (
        <div>
            {editPV || editButton}
            <Slide direction="up" in={editPV} mountOnEnter unmountOnExit>
                {form}
            </Slide>
        </div>
    )
}

export default EditForm