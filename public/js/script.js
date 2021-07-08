$( document ).ready(function() {
    $('.payS').click(function(e){
        e.preventDefault();
        var JsonObject = {
            "pay_form": {
                "token": "xxx",
                "design_name": "des1"
            },
            "transactions": {
                "12345-7891234567": {
                    "id": "12345-7891234567",
                    "operation": "pay",
                    "status": "fail",
                    "descriptor": "FAKE_PSP",
                    "amount": 2345,
                    "currency": "USD",
                    "fee": {
                        "amount": 0,
                        "currency": "USD"
                    },
                    "card": {
                        "bank": "CITIZENS STATE BANK",
                    }
                }
            },
            "error": {
                "code": "6.01",
                "messages": [
                    "Unknown decline code"
                ],
                "recommended_message_for_user": "Unknown decline code"
            },
            "order": {
                "order_id": "12345-7891234567",
                "status": "declined",
                "amount": 2345,
                "refunded_amount": 0,
                "currency": "USD",
                "marketing_amount": 2345,
                "marketing_currency": "USD",
                "processing_amount": 2345,
                "processing_currency": "USD",
                "descriptor": "FAKE_PSP",
                "fraudulent": false,
                "total_fee_amount": 0,
                "fee_currency": "USD"
            },
            "transaction": {
                "id": "12345-7891234567",
                "operation": "pay",
                "status": "succeed"
            }
        };
        console.log('clickS');
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                'Authorization': 'Bearer ' + $('meta[name="api_token"]').attr('content'),
            }
        });
        $.ajax({
            type:'POST',
            url:'/api/pay',
            data:{
                "object":JsonObject,"transaction":JsonObject.transaction,"id":JsonObject.transaction.id,"status":JsonObject.transaction.status},
            success: function () {// success callback function
                window.location.href='/thank-you';
            }

        });
    });
    $('.payF').click(function(e){
        e.preventDefault();
        var JsonObject = {
            "pay_form": {
                "token": "xxx",
                "design_name": "des1"
            },
            "transactions": {
                "12345-7891234567": {
                    "id": "12345-7891234567",
                    "operation": "pay",
                    "status": "fail",
                    "descriptor": "FAKE_PSP",
                    "amount": 2345,
                    "currency": "USD",
                    "fee": {
                        "amount": 0,
                        "currency": "USD"
                    },
                    "card": {
                        "bank": "CITIZENS STATE BANK",
                    }
                }
            },
            "error": {
                "code": "6.01",
                "messages": [
                    "Unknown decline code"
                ],
                "recommended_message_for_user": "Unknown decline code"
            },
            "order": {
                "order_id": "12345-7891234567",
                "status": "declined",
                "amount": 2345,
                "refunded_amount": 0,
                "currency": "USD",
                "marketing_amount": 2345,
                "marketing_currency": "USD",
                "processing_amount": 2345,
                "processing_currency": "USD",
                "descriptor": "FAKE_PSP",
                "fraudulent": false,
                "total_fee_amount": 0,
                "fee_currency": "USD"
            },
            "transaction": {
                "id": "12345-7891234567",
                "operation": "pay",
                "status": "fail"
            }
        };
        console.log('clickF');
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                'Authorization': 'Bearer ' + $('meta[name="api_token"]').attr('content'),
            }
        });
        $.ajax({
            type:'POST',
            url:'/api/pay',
            data:{
                "object":JsonObject,"transaction":JsonObject.transaction,"id":JsonObject.transaction.id,"status":JsonObject.transaction.status},
            success: function () {// success callback function
                window.location.href='/sorry';
            }
        });
    });
});
