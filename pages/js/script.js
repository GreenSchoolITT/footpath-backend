function onLoad() {
  $.ajax({
    url: "",
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      name: "Name",
      phone: "0674444444"
    }),
    success: (ret) => {
      console.log("success");
    },
    error: (req, err) => {
      console.log(err);
    }
  });
}