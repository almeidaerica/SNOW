function onLoad() {

    var chg_state = g_form.getValue('state');
    if (chg_state == '3') {

        var fields = g_form.getEditableFields();
        for (var x = 0; x < fields.length; x++) {
            g_form.setReadOnly(fields[x], true);

        }
    }

}
