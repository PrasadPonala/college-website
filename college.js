import javax.servlet.*;
import java.sql*;
public class LoginServlet extends GenericServlet
{
	Connection con;
	Statement st;
	public void init(ServletConfig config)
	{
		try
		{
			Class.forName("oracle.jdbc.driver.OracleDrive");
			con=DriverManager.grtConnection("jdbc:oracle:thin:@localhost:1521:xe","system","system");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	public void service(ServletRequest req,ServletResponse res)
	{
		try
		{
		
			String a=req.getParameter("uname");
			String b=req.getParameter("pwd");
			st=con.createStatement();
			ResultSet rs=st.executeQuery("select*from login where uname='"+a+"' and pwd='"+b+"' ");
			PrintWriter out=res.getWriter();
			if(rs.next())
			{
				out.println("Welcome to:"+a);
			}
			else
			{
				out.println("Wrong credentials");
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}