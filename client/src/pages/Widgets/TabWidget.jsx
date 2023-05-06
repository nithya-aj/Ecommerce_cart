import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import axios from 'axios';
import DishItem from './DishItem';

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
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    React.useEffect(() => {
        axios
            .get("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
            .then((response) => {
                const data = response.data[0]
                setCategories(data.table_menu_list)
                setDishList(data.table_menu_list.map((category) => category.category_dishes))
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
                    {categories.map((category, index) => (<Tab label={category.menu_category} key={category.menu_category_id} {...a11yProps(index)}
                        sx={{
                            width: '13rem',
                            [theme.breakpoints.up('md')]: {
                                width: '23rem',
                            },
                        }} />))}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {dishList.map((categoryDishes, index) => (
                    <TabPanel key={categoryDishes.menu_category_id} value={value} index={index} dir={theme.direction}>
                        {categoryDishes.map((dish, index) => (
                            <DishItem dish={dish} />
                        ))}
                    </TabPanel>
                ))}
            </SwipeableViews>
        </Box >
    );
}
