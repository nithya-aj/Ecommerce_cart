import { Box } from '@mui/material'
import React from 'react'

const IconCmp = ({ color }) => {
    return (
        <Box sx={{ border: `1px solid ${color}`, height: '1.3rem', width: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ backgroundColor: color, borderRadius: '50%', height: '0.9rem', width: '0.7rem' }}>
            </Box>
        </Box>
    )
}

export default IconCmp