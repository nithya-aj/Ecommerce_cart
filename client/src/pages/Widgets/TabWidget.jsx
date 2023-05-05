import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconCmp from 'Components/IconCmp';
import { Button, ButtonGroup, Divider } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


export default function TabWidget() {


    const [data, setData] = React.useState([])

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const DataUrl = 'https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099'

    const fetchData = async () => {
        const res = await axios.get(DataUrl)
            .catch(err => console.log(err))
        const data = await res.data
        console.log(data);
        return data
    }
    useEffect(() => {
        fetchData().then(data => setData(data))
    }, [])

    return (
        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
            <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none', color: 'black' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor='primary'
                    textColor="inherit"
                    variant="scrollable"
                    aria-label="full width tabs example"
                    visibleScrollbar={true}
                >
                    <Tab label="Item One" {...a11yProps(0)} sx={{ width: '23rem' }} />
                    <Tab label="Item Two" {...a11yProps(1)} sx={{ width: '23rem' }} />
                    <Tab label="Item Three" {...a11yProps(3)} sx={{ width: '23rem' }} />
                    <Tab label="Item Three" {...a11yProps(4)} sx={{ width: '23rem' }} />
                    <Tab label="Item Three" {...a11yProps(5)} sx={{ width: '23rem' }} />
                    <Tab label="Item Three" {...a11yProps(6)} sx={{ width: '23rem' }} />
                    <Tab label="Item Three" {...a11yProps(2)} sx={{ width: '23rem' }} />
                    <Tab label="Item Three" {...a11yProps(2)} sx={{ width: '23rem' }} />
                    <Tab label="Item Three" {...a11yProps(2)} sx={{ width: '23rem' }} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Box container spacing={2} sx={{ px: '1rem', flexGrow: 1, display: 'flex' }}>
                        <Box gap={2} item xs={9.5} sx={{ display: 'flex', flexGrow: 4 }}>
                            <Box>
                                <IconCmp color={'green'} />
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: '500' }}>Spinach Salad</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: "1rem" }}>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>SAR 7.95</Typography>
                                    <Typography sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>15 Calories</Typography>

                                </Box>
                                <Typography color='GrayText' variant='subtitle2'>Fresh spinach, mushrooms, and hard-boiled egg served with warm abacon vinaigrette</Typography>
                                <Box sx={{ my: '8px' }}>
                                    <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ borderRadius: '20px' }}>
                                        <Button sx={{ backgroundColor: 'green', borderRadius: '20px', width: '2.7rem', height: '2rem' }}>-</Button>
                                        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.7rem', backgroundColor: 'green', color: 'white' }}><Typography>0</Typography></Box>
                                        <Button sx={{ backgroundColor: 'green', borderRadius: '20px', width: '2.7rem', height: '2rem' }}>+</Button>
                                    </ButtonGroup>
                                </Box>
                                <Typography color='error' variant='subtitle2'>Customization available</Typography>
                            </Box>
                        </Box>
                        <Box item xs={1} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center ', flexGrow: 1 }}>
                            <Typography>15 Calories</Typography>
                        </Box>
                        <Box item xs={1.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Box>
                                <img src="https://picsum.photos/seed/picsum/200/300" height='100' width='100' alt="" style={{ borderRadius: "12px" }} />
                            </Box>
                        </Box>
                    </Box>



                    <Box container spacing={2} sx={{ px: '1rem', flexGrow: 1, display: 'flex' }}>
                        <Box gap={2} item xs={9.5} sx={{ display: 'flex', flexGrow: 4 }}>
                            <Box>
                                <IconCmp color={'green'} />
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: '500' }}>Spinach Salad</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: "1rem" }}>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>SAR 7.95</Typography>
                                    <Typography sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>15 Calories</Typography>

                                </Box>
                                <Typography color='GrayText' variant='subtitle2'>Fresh spinach, mushrooms, and hard-boiled egg served with warm abacon vinaigrette</Typography>
                                <Box sx={{ my: '8px' }}>
                                    <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ borderRadius: '20px' }}>
                                        <Button sx={{ backgroundColor: 'green', borderRadius: '20px', width: '2.7rem', height: '2rem' }}>-</Button>
                                        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.7rem', backgroundColor: 'green', color: 'white' }}><Typography>0</Typography></Box>
                                        <Button sx={{ backgroundColor: 'green', borderRadius: '20px', width: '2.7rem', height: '2rem' }}>+</Button>
                                    </ButtonGroup>
                                </Box>
                                <Typography color='error' variant='subtitle2'>Customization available</Typography>
                            </Box>
                        </Box>
                        <Box item xs={1} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center ', flexGrow: 1 }}>
                            <Typography>15 Calories</Typography>
                        </Box>
                        <Box item xs={1.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Box>
                                <img src="https://picsum.photos/seed/picsum/200/300" height='100' width='100' alt="" style={{ borderRadius: "12px" }} />
                            </Box>
                        </Box>
                    </Box>



                    <Box container spacing={2} sx={{ px: '1rem', flexGrow: 1, display: 'flex' }}>
                        <Box gap={2} item xs={9.5} sx={{ display: 'flex', flexGrow: 4 }}>
                            <Box>
                                <IconCmp color={'green'} />
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: '500' }}>Spinach Salad</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: "1rem" }}>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>SAR 7.95</Typography>
                                    <Typography sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>15 Calories</Typography>

                                </Box>
                                <Typography color='GrayText' variant='subtitle2'>Fresh spinach, mushrooms, and hard-boiled egg served with warm abacon vinaigrette</Typography>
                                <Box sx={{ my: '8px' }}>
                                    <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ borderRadius: '20px' }}>
                                        <Button sx={{ backgroundColor: 'green', borderRadius: '20px', width: '2.7rem', height: '2rem' }}>-</Button>
                                        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.7rem', backgroundColor: 'green', color: 'white' }}><Typography>0</Typography></Box>
                                        <Button sx={{ backgroundColor: 'green', borderRadius: '20px', width: '2.7rem', height: '2rem' }}>+</Button>
                                    </ButtonGroup>
                                </Box>
                                <Typography color='error' variant='subtitle2'>Customization available</Typography>
                            </Box>
                        </Box>
                        <Box item xs={1} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center ', flexGrow: 1 }}>
                            <Typography>15 Calories</Typography>
                        </Box>
                        <Box item xs={1.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Box>
                                <img src="https://picsum.photos/seed/picsum/200/300" height='100' width='100' alt="" style={{ borderRadius: "12px" }} />
                            </Box>
                        </Box>
                    </Box>
                    <Divider sx={{ mx: '1rem' }}></Divider>
                </TabPanel>

            </SwipeableViews>
        </Box >
    );
}
