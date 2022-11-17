import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

import TableStickyHeader from 'src/views/tables/TableStickyHeader'

import React from 'react'

export const Users = () => {
    return ( 
        <Grid item xs={2}>
            <Card>
                <CardHeader title='Sticky Header' titleTypographyProps={{ variant: 'h6' }} />
                <TableStickyHeader />
            </Card>
        </Grid>
    )
}
export default Users