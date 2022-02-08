define(
    [
        'Magento_Payment/js/view/payment/cc-form',	
        'jquery',
        'mage/url',
        'Magento_Checkout/js/action/place-order',
	 'Magento_Checkout/js/action/select-payment-method',
        'Magento_Checkout/js/model/full-screen-loader',
        'Magento_Checkout/js/model/payment/additional-validators',
        'Magento_Payment/js/model/credit-card-validation/validator'
    ],
    function (Component, $,url) {
        'use strict';
 
        return Component.extend({
            defaults: {
		redirectAfterPlaceOrder: false,
                template: 'EVOPayments_Payment/payment/evopaymentshosted'
            },

            getCode: function() {
                return 'evopayments';
            },

            isActive: function() {
                return true;
            },
            validate: function() {
                var $form = $('#' + this.getCode() + '-form');
                return $form.validation() && $form.validation('isValid');
            },
            afterPlaceOrder: function () {
		console.log("after click place order");
                var redirectUrl = url.build('evopayments/hosted/redirect');
                $.mage.redirect(redirectUrl);
            },
        });
    }
);