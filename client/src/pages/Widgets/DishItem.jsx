import { Box, Button, ButtonGroup, Divider, Typography } from '@mui/material'
import IconCmp from 'Components/IconCmp'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity } from 'store'
import { incrementQuantity } from 'store'
import { useTheme } from '@mui/material/styles';

const DishItem = ({ dish }) => {

    const theme = useTheme();
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    return (
        <Box key={dish.dish_id} container spacing={2}
            sx={{
                px: '1rem', [theme.breakpoints.down('md')]: { px: '0rem' },
                flexGrow: 1,
                display: 'flex'
            }}>
            <Box gap={2} item xs={9.5} sx={{ display: 'flex', flexGrow: 4 }}>
                {dish.dish_Type === 1 ?
                    (<Box>
                        <IconCmp color={'red'} />
                    </Box>) :
                    (<Box>
                        <IconCmp color={'green'} />
                    </Box>)
                }
                <Box sx={{ minWidth:'18rem' }}>
                    <Typography sx={{ fontWeight: '500' }}>{dish.dish_name}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '2rem' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>{dish.dish_currency} {dish.dish_price}</Typography>
                        <Box item xs={1} sx={{ display: { xs: 'flex', sm: 'none', md: 'none' }, alignItems: 'center', justifyContent: 'flex-end', flexGrow: 1}}>
                            <Typography>{dish.dish_calories} Calories</Typography>
                        </Box>
                    </Box>
                    <Typography color='GrayText' variant='subtitle2'>{dish.description}</Typography>
                    {dish.dish_Availability ? <Box sx={{ my: '8px' }}>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ borderRadius: '20px' }}>
                            <Button sx={{ backgroundColor: 'green', borderRadius: '20px', width: '2.7rem', height: '2rem' }} onClick={() => dispatch(decrementQuantity({ itemId: dish.dish_id, quantity: 1 }))}>-</Button>
                            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.7rem', backgroundColor: 'green', color: 'white' }}>
                                <Typography>{cart.items.find(item => item.itemId === dish.dish_id)?.quantity || 0}</Typography>
                            </Box>
                            <Button sx={{ backgroundColor: 'green', borderRadius: '20px', width: '2.7rem', height: '2rem' }} onClick={() => dispatch(incrementQuantity({ itemId: dish.dish_id, quantity: 1 }))}>+</Button>
                        </ButtonGroup>
                    </Box> : ""}
                    {dish.addonCat?.length > 0 && (<Typography color='error' variant='subtitle2'>Customization available</Typography>)}
                    {dish.dish_Availability ? "" : (<Typography color='error' variant='subtitle2'>Not available</Typography>)}
                </Box>
            </Box>
            <Box item xs={1} sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-end', flexGrow: 1, paddingRight: '8rem', [theme.breakpoints.down('md')]: { pr: '4rem' }, }}>
                <Typography>{dish.dish_calories} Calories</Typography>
            </Box>
            <Box item xs={1.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Box>
                    <img src={dish.dish_image} height='100' width='100' alt="" style={{ borderRadius: "12px" }} />
                </Box>
            </Box>
            <Divider sx={{ mx: '1rem' }}></Divider>
        </Box>
    )
}

export default DishItem