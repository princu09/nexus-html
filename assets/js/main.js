$(document).ready(function () {
  $("#menu").click(function (e) {
    e.preventDefault();
    $(".sidebar").toggleClass("active");
  });

  $(window).resize(function () {
    if ($(window).width() > 768) {
      $(".sidebar").removeClass("active");
    }
  });
});

// Table
$(document).ready(function () {
  // Initialize DataTables with language customization
  $("#myTable").DataTable({
    language: {
      info: "",
      dom: "rt",
      searching: false,
      paging: true,
      pageLength: 5,
      paginate: {
        // first: '<i class="fas fa-angle-double-left"></i>',
        previous: '<i class="fas fa-angle-left"></i>',
        next: '<i class="fas fa-angle-right"></i>',
        // last: '<i class="fas fa-angle-double-right"></i>',
      },
    },
  });

  // Remove Show X entries
  $(".dataTables_length").remove();

  // Remove search functionality
  $(".dataTables_filter").remove();
});
