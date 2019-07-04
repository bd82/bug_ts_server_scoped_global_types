sap.ui.define(
    ["sap/ui/core/TooltipBase"],
    /**
     * @param {typeof sap.ui.core.TooltipBase} TooltipBase
     */
    function(TooltipBase) {
        const toolTipInstance = new TooltipBase("myID", {
            dependents: null,
            closeDelay: 666
        });
    }
);
