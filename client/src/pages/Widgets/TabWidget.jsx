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
import { useState } from 'react';
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

    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [categories, setCategories] = useState([])
    const [dishList, setDishList] = useState([])


    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
        setDishList(categories[newValue].category_dishes)
    };

    const handleChangeIndex = (index) => {
        console.log('vanneeee');
        setValue(index);
        setDishList(categories[index].category_dishes)
        console.log(index);
    };

    React.useEffect(() => {
        axios
            .get("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
            .then((response) => {
                const data = response.data[0]
                setCategories(data.table_menu_list)
                // setDishList(data.table_menu_list.map((category) => category.category_dishes))
                setDishList(data.table_menu_list[0].category_dishes)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categories, dishList]);


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
                    {categories.map((category, index) => (<Tab label={category.menu_category} key={category.menu_category_id} {...a11yProps(index)} sx={{ width: '23rem' }} />))}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {categories.map((category, index) => (
                    <TabPanel key={category.menu_category_id} value={value} index={index} dir={theme.direction}>
                        {dishList.map((dish, index) => (
                            <Box key={dish.dish_id} container spacing={2} sx={{ px: '1rem', flexGrow: 1, display: 'flex' }}>
                                <Box gap={2} item xs={9.5} sx={{ display: 'flex', flexGrow: 4 }}>
                                    {dish.dish_Type === 1 ?
                                        (<Box>
                                            <IconCmp color={'red'} />
                                        </Box>) :
                                        (<Box>
                                            <IconCmp color={'green'} />
                                        </Box>)
                                    }
                                    <Box>
                                        <Typography sx={{ fontWeight: '500' }}>{dish.dish_name}</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: "1rem" }}>
                                            <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>{dish.dish_currency} {dish.dish_price}</Typography>
                                            <Typography sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>{dish.dish_calories} Calories</Typography>

                                        </Box>
                                        <Typography color='GrayText' variant='subtitle2'>{dish.description}</Typography>
                                        <Box sx={{ my: '8px' }}>
                                            <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ borderRadius: '20px' }}>
                                                <Button sx={{ backgroundColor: 'green', borderRadius: '20px', width: '2.7rem', height: '2rem' }}>-</Button>
                                                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.7rem', backgroundColor: 'green', color: 'white' }}><Typography>0</Typography></Box>
                                                <Button sx={{ backgroundColor: 'green', borderRadius: '20px', width: '2.7rem', height: '2rem' }}>+</Button>
                                            </ButtonGroup>
                                        </Box>
                                        {dish.addonCat?.length > 0 && (<Typography color='error' variant='subtitle2'>Customization available</Typography>)}
                                    </Box>
                                </Box>
                                <Box item xs={1} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center ', flexGrow: 1 }}>
                                    <Typography>{dish.dish_calories} Calories</Typography>
                                </Box>
                                <Box item xs={1.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <Box>
                                        <img src={dish.dish_image} height='100' width='100' alt="" style={{ borderRadius: "12px" }} />
                                    </Box>
                                </Box>
                                <Divider sx={{ mx: '1rem' }}></Divider>
                            </Box>
                        ))}
                    </TabPanel>
                ))}
            </SwipeableViews>
        </Box >
    );
}
