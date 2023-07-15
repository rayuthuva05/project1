abstract class LibraryItem{
    private String title;
    private String itemID;
	private boolean checkedOut;
    
    public LibraryItem(String title,String itemId){
    	this.title=title;
    	this.itemID=itemId;
		
		this.checkedOut=false;
    }
    
    public void setTitle(String title){
    	this.title=title;
    }
    
    public String getTitle(){
    	return title;
    }
    
    public void setItemID(String id){
    	this.itemID=id;
    }
    
    public String getItemID(){
    	return itemID;
    }
	public void checkOut(){
		if(!checkedOut){
			checkedOut=true;
			System.out.println(title+" has been checked out");
		}
		else
			System.out.println(title+" is already checked out");
	}	
	
    public void checkIn(){
		if(checkedOut){
			checkedOut=false;
			System.out.println(title+" has been checked in");
		}
		else
			System.out.println(title+" is already checked in");
	}
    
    abstract void displayItemDetails();
}

class Book extends LibraryItem{
    private String author;
    private int numPages;
   
    public Book(String title,String itemId,String author,int numpage){
        super(title,itemId);
        this.author=author;
        this.numPages=numpage;
    }
    
    public void displayItemDetails(){
        System.out.println("Book Title : "+super.getTitle());
        System.out.println("Book ID : "+super.getItemID());
        System.out.println("Book Author : "+this.author);
        System.out.println("Number of pages : "+this.numPages);
        System.out.println();
    }
}

class Magazine extends LibraryItem{
    private String issueDate;
    private String publisher;
    
    public Magazine(String title,String id,String issue_date,String publisher){
        super(title,id);
        this.issueDate=issue_date;
        this.publisher=publisher;
    }
    
    public void displayItemDetails(){
        System.out.println("Title : "+super.getTitle());
        System.out.println("Magazine ID : "+super.getItemID());
        System.out.println("Issue date : "+this.issueDate);
        System.out.println("Publisher : "+this.publisher);
        System.out.println();
    }
}

class LibraryMember {
    private String MemberID;
    private String name;
    
    
    public LibraryMember(String id,String name){
        this.MemberID=id;
        this.name=name;
    }
    
    public void displayMemberDetails(){
        System.out.println("Member ID : "+MemberID);
        System.out.println("Name : "+name);
        System.out.println();
    }
}
public class Library_Management_System{
    public static void main(String args[]){
        Book bk1=new Book("The Catcher in the Rye","B001","J.D. Salinger",240);
        Book bk2=new Book("To Kill a Mockingbird","B002","Harper Lee", 281);
        Book bk3=new Book("1984","B003","George Orwell",328);
        Book bk4=new Book("Pride and Prejudice","B004","Jane Austen",432);
        Book bk5=new Book("The Hobbit","B005","J.R.R. Tolkien",320);
        
        Magazine mgz1=new Magazine("National Geographic","M001","August 2023","National Geographic Society");
        Magazine mgz2=new Magazine("Time","M002","September 2023","Time USA, LLC");
        Magazine mgz3=new Magazine("Forbes","M003","June 2023","Forbes Media");
        Magazine mgz4=new Magazine("Vogue","M004","July 2023","Condé Nast");
        Magazine mgz5=new Magazine("Sports Illustrated","M005","July 2023", "Maven Coalition");
        
        LibraryMember lm1=new LibraryMember("L001","John Doe");
        LibraryMember lm2=new LibraryMember("L002","Jane Smith");
        LibraryMember lm3=new LibraryMember("L003","David Johnson");
        LibraryMember lm4=new LibraryMember("L004","Sarah Williams");
        LibraryMember lm5=new LibraryMember("L005","Michael Brown");
		
		System.out.println("//check the checkIn and checkOut method");
		bk1.checkOut();
		bk1.checkIn();
		
        System.out.println("		--------Book Details--------");
        bk1.displayItemDetails();
        bk2.displayItemDetails();
        bk3.displayItemDetails();
        bk4.displayItemDetails();
        bk5.displayItemDetails();
        
        System.out.println("		--------Magazine Details--------");
        mgz1.displayItemDetails();
        mgz2.displayItemDetails();
        mgz3.displayItemDetails();
        mgz4.displayItemDetails();
        mgz5.displayItemDetails();
        
        System.out.println("		--------Library Members Details--------");
        lm1.displayMemberDetails();
        lm2.displayMemberDetails();
        lm3.displayMemberDetails();
        lm4.displayMemberDetails();
        lm5.displayMemberDetails();
        
    }
}