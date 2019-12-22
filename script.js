const API_publicKey = "FLWPUBK_TEST-3a32cdd4f9ea9fb90c28d0fd175aa0eb-X";

    function payWithRave() {
        var x = getpaidSetup({
            PBFPubKey: API_publicKey,
            customer_email: "user@example.com",
            amount: 1800,
            currency: "NGN",
            txref: "lynda"+Date.now(),
            subaccounts: [
              {
                id: "RS_36663176F7B52218DCC70DAE85D4F07E",
                transaction_charge_type: "percentage"
              }
            ],
            onclose: function() {},
            callback: function(response) {
                var txref = response.tx.txRef; // collect flwRef returned and pass to a 					server page to complete status check.
                console.log("This is the response returned after a charge", response);
                if (
                    response.tx.chargeResponseCode == "00" ||
                    response.tx.chargeResponseCode == "0"
                ) {
                    alert("Paid Successfully!")// redirect to a success page
                } else {
                    // redirect to a failure page.
                }

                x.close(); // use this to close the modal immediately after payment.
            }
        });
    }
