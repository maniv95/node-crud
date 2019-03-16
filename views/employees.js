<%- include layouts/header.js %>

        <div class="page-data">
         <div class="data-btn">
           <button onClick="addUser();">+ Add</button>
         </div>
         <div class="data-table">
            <table border="1" cellpadding="7" cellspacing="7">
                <tr>
                    <th width="50px">No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th width="120px">Action</th>
                </tr>
                               
                <% if(data.length){ 
                                
                 for(var i = 0;i < data.length;i++) { %>
                 
                <tr>
                    <td><%=(i+1)%></td>
                    <td><%=data[i].name%></td>
                    <td><%=data[i].address%></td>
                    <td><%=data[i].phone%></td>
                    <td><%=data[i].email%></td>
                    <td>
                        <a class="a-inside edit" href="../customers/edit/<%=data[i].id%>">Edit</a>
                       
                        <a class="a-inside delete" href="../customers/delete/<%=data[i].id%>">Delete</a>
                       
                    </td>
                </tr>
            <% }
            
             }else{ %>
                 <tr>
                    <td colspan="3">No user</td>
                 </tr>
            <% } %>
                
                              
                
            </table>
         </div>
        </div>
        
<%- include layouts/footer.ejs %>
