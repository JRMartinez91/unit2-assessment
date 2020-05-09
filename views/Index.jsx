const React = require('react')

//Functions

//render "no todos" message if list is empty
//and list if there is anything in it
const renderList=(list)=>{
    if(list.length<1){
        return(
            <h3>There are no To Dos yet!</h3>
        )
    } else {
        return(
            <ul>
            {list.map((item,index)=>{
                return(
                <li>{item.todo} - {(item.done ? "Done":"Not Done")}
                <form action={`/${item._id}?_method=DELETE`} method="POST"><input type="submit" value="Delete"></input></form></li>
                )
            })}
            </ul>
        )
    }
}

//Class
class Index extends React.Component{
    render(){

        const {list} = this.props;

        return(
            <>
            <head>

            </head>
            <body>
                <h1>To-Do List</h1>
                {renderList(list)}
                <hr/>
                <form action='/' method="POST">
                    <input name="todo" type="text"/>
                    <input type="submit" name="" value="Add To Do"/>
                </form>
            </body>
            </>
        )
    }
}

module.exports = Index;