function successMessage(){
    Swal.fire({
        title: "SUCCESS",
        html: `
        <b>Thank you for Booking Our Bus Seats. <br>
        We are provide best service and deals for you.</b><br><br>
        Shortly you will find a confirmation in your email.<br>
      `,
        icon: "success",
        confirmButtonText: "Continue",
        showLoaderOnConfirm: true,
      });
}