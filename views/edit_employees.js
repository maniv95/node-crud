<%- include layouts/header.js %>

        <div class="page-data">
            
            <form method="post" action="/customers/edit/<%=data[0].id%>">
                <table cellpadding="11">
                <tr>
                    <td class="label">Name</td><td>: <input type="text" name="name" value="<%=data[0].name%>" required></td>
                 </tr>
                 <tr>
                    <td class="label" valign="top">Address</td>
                    <td valign="top">: 
                        <textarea name="address" required cols="30" rows="5"><%=data[0].address%></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="label">Email</td><td>: <input type="text" value="<%=data[0].email%>" name="email" required></td>
                 </tr>
                  <tr>
                    <td class="label">Phone</td><td>: <input type="text" name="phone" value="<%=data[0].phone%>" required></td>
                 </tr>
                 <tr>
                    <td class="label"></td>
                    <td>
                        &nbsp; <input type="submit" name="submit" value="Save">
                       <input type="button" name="cancel" value="Cancel" class="cancel" onClick="cancelAdd()">
                    </td>
                 </tr>
                </table>
            </form>
            
        </div>
        
<%- include layouts/footer.ejs %>