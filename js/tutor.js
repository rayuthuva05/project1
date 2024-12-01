   document.addEventListener("DOMContentLoaded", function() {
        const rows = document.querySelectorAll("#myTable tr");
        rows.forEach((row, index) => {
            row.cells[0].textContent = index + 1; 
        });
    });

    $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });

      
     
  