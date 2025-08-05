import {Button, Card , CardActions, CardContent, Typography} from "@mui/material"

function ToDoItem({fetchDetailsOfCurrentTodo , todo}){
    // console.log(todo)
    return <Card sx = { {maxWidth : 850 , display : "flex" , flexDirection : "column" , justifyContent : "space-between"}}>
        <CardContent>
            <Typography  variant="h5" color="text.secondary">{todo?.todo}</Typography>
        </CardContent>
        <CardActions>
            <Button 
            onClick = { () => {
                fetchDetailsOfCurrentTodo(todo?.id)
            }}
            sx = {{backgroundColor : "black" , color : "white"  , opacity: 0.75 , '&:hover' : {
                opacity : 1 ,
                backgroundColor : "black" ,
                color : "white"
            } }}>
                Show Details
            </Button>
        </CardActions>
    </Card>
}

export default ToDoItem