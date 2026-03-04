document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js loaded — DOM ready");

  const tpl = document.getElementById("template-content");
  console.log("template-content element:", tpl);

  if (tpl) {
    tpl.innerHTML =
      '<div style="padding:8px;color:#1c4b82;font-style:italic">Quotation will be default (rendered by JS)</div>';
  }
});

// Data structures and Templates
const templates = {
  invoice: `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px; padding: 0 5px;">
      
            <div style="text-align: right; font-size: 15px; line-height: 1.6; color: #0c1a3a;">
                <div><strong>GSTIN:</strong> 33CFHPA3509J1ZS</div>
            </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding: 0 5px;">
            <div style="font-weight: bold; font-size: 13px; color: #0c1a3a; width: 33%;">Invoice No: <span contenteditable="true" id="invoice-no" style="min-width: 80px; display: inline-block; border-bottom: 1px solid #94a3b8;"></span></div>
            <div style="width: 34%; text-align: center;">
                <span style="background: #0c1a3a; color: white; padding: 6px 30px; border-radius: 4px; font-weight: bold; font-size: 14px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-transform: uppercase; border: 1px solid #0e7490; -webkit-print-color-adjust: exact; print-color-adjust: exact;">Tax Invoice</span>
            </div>
            <div style="width: 33%;"></div>
        </div>

        <table class="doc-table" style="width: 100%; border-collapse: collapse; table-layout: fixed; border: 1.5px solid #000;">
            <thead>
                <tr>
                    <th style="width: 30%; background: #0c1a3a; color: white; border: 1.5px solid #000; padding: 6px; font-size: 11px;">CONSIGNOR NAME & ADDRESS</th>
                    <th style="width: 30%; background: #0c1a3a; color: white; border: 1.5px solid #000; padding: 6px; font-size: 11px;">CONSIGNEE NAME & ADDRESS</th>
                    <th style="width: 40%; background: #0c1a3a; color: white; border: 1.5px solid #000; padding: 6px; font-size: 11px;">DETAILS</th>
                </tr>
            </thead>
            <tbody>
                <!-- Address Box Row -->
                <tr>
                    <td style="border: 1.5px solid #000; vertical-align: top; padding: 8px; height: 100px;">
                        <div contenteditable="true" style="width: 100%; min-height: 84px; outline: none; font-size: 11px;"></div>
                    </td>
                    <td style="border: 1.5px solid #000; vertical-align: top; padding: 8px; height: 100px;">
                        <div contenteditable="true" style="width: 100%; min-height: 84px; outline: none; font-size: 11px;"></div>
                    </td>
                    <td rowspan="8" style="border: 1.5px solid #000; padding: 0; vertical-align: top;">
                        <table style="width: 100%; height: 100%; border-collapse: collapse; font-size: 10.5px;">
                            <tr style="border-bottom: 1px solid #000;">
                                <td style="padding: 4px 8px; width: 68%;">Freight Charges</td>
                                <td style="padding: 4px 8px; border-left: 1.5px solid #000; text-align: right; width: 32%;"><span contenteditable="true" class="charge-amount" oninput="calculateTotal()" style="display: block; width: 100%; min-height: 15px;"></span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #000;">
                                <td style="padding: 4px 8px;">Packing Materials and Charges</td>
                                <td style="padding: 4px 8px; border-left: 1.5px solid #000; text-align: right;"><span contenteditable="true" class="charge-amount" oninput="calculateTotal()" style="display: block; width: 100%; min-height: 15px;"></span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #000;">
                                <td style="padding: 4px 8px;">Loading Charges</td>
                                <td style="padding: 4px 8px; border-left: 1.5px solid #000; text-align: right;"><span contenteditable="true" class="charge-amount" oninput="calculateTotal()" style="display: block; width: 100%; min-height: 15px;"></span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #000;">
                                <td style="padding: 4px 8px;">Unloading Charges</td>
                                <td style="padding: 4px 8px; border-left: 1.5px solid #000; text-align: right;"><span contenteditable="true" class="charge-amount" oninput="calculateTotal()" style="display: block; width: 100%; min-height: 15px;"></span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #000;">
                                <td style="padding: 4px 8px;">Rearranging Charges</td>
                                <td style="padding: 4px 8px; border-left: 1.5px solid #000; text-align: right;"><span contenteditable="true" class="charge-amount" oninput="calculateTotal()" style="display: block; width: 100%; min-height: 15px;"></span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #000;">
                                <td style="padding: 4px 8px;">Warehousing / Car Transportation</td>
                                <td style="padding: 4px 8px; border-left: 1.5px solid #000; text-align: right;"><span contenteditable="true" class="charge-amount" oninput="calculateTotal()" style="display: block; width: 100%; min-height: 15px;"></span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #000;">
                                <td style="padding: 4px 8px;">A/C Assembling / De-assembling Charges</td>
                                <td style="padding: 4px 8px; border-left: 1.5px solid #000; text-align: right;"><span contenteditable="true" class="charge-amount" oninput="calculateTotal()" style="display: block; width: 100%; min-height: 15px;"></span></td>
                            </tr>
                            <tr style="border-bottom: 1.5px solid #000;">
                                <td style="padding: 4px 8px;">Surcharges</td>
                                <td style="padding: 4px 8px; border-left: 1.5px solid #000; text-align: right;"><span contenteditable="true" class="charge-amount" oninput="calculateTotal()" style="display: block; width: 100%; min-height: 15px;"></span></td>
                            </tr>
                            <!-- Summary Alignment Rows -->
                            <tr style="height: 30px; border-bottom: 1px solid #000;">
                                <td style="padding: 6px 8px; font-weight: bold; background: #ecfeff; color: #0e7490; text-align: right;">Sub-Total:</td>
                                <td style="padding: 6px 8px; border-left: 1.5px solid #000; text-align: right; font-weight: bold;">₹ <span id="sub-total">0</span></td>
                            </tr>
                        <tr style="border-bottom:1px solid #000;">
                            <td style="padding: 4px 8px;">CGST @ <span contenteditable="true" id="cgst-pct" oninput="calculateTotal()" style="min-width:24px; display:inline-block; border-bottom:1px dashed #94a3b8;">0</span> %</td>
                            <td style="padding: 4px 8px; border-left: 1.5px solid #000; text-align: right;">₹ <span id="cgst-amt">0</span></td>
                        </tr>
                        <tr style="border-bottom:1px solid #000;">
                            <td style="padding: 4px 8px;">SGST @ <span contenteditable="true" id="sgst-pct" oninput="calculateTotal()" style="min-width:24px; display:inline-block; border-bottom:1px dashed #94a3b8;">0</span> %</td>
                            <td style="padding: 4px 8px; border-left: 1.5px solid #000; text-align: right;">₹ <span id="sgst-amt">0</span></td>
                        </tr>
                        <tr style="border-bottom:1px solid #000;">
                            <td style="padding: 4px 8px;">IGST @ <span contenteditable="true" id="igst-pct" oninput="calculateTotal()" style="min-width:24px; display:inline-block; border-bottom:1px dashed #94a3b8;">0</span> %</td>
                            <td style="padding: 4px 8px; border-left: 1.5px solid #000; text-align: right;">₹ <span id="igst-amt">0</span></td>
                        </tr>
                            <tr style="height: 34px; border-bottom: 1px solid #000;">
                                <td style="padding: 6px 8px; font-weight: bold; background: #0c1a3a; color: white; text-align: right; -webkit-print-color-adjust: exact; print-color-adjust: exact;">Grand Total:</td>
                                <td style="padding: 6px 8px; border-left: 1.5px solid #000; text-align: right; background: #ecfeff; font-weight: bold; font-size: 13px; color: #0c1a3a; -webkit-print-color-adjust: exact; print-color-adjust: exact;">₹ <span id="grand-total">0</span></td>
                            </tr>
                            <tr>
                                <td colspan="2" style="border: none; padding: 10px; font-size: 11px; vertical-align: top; height: 140px;">
                                    <div style="font-weight: bold; color: #0c1a3a; margin-bottom: 4px;">For ARK PACKERS AND MOVERS</div>
                                    <br><br><br><br>
                                    <div style="text-align: right; font-weight: bold; letter-spacing: 0.5px;">Authorized Signatory</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <!-- Section Details Rows -->
                <tr>
                    <td style="border: 1.5px solid #000; border-right: none; padding: 5px 8px; font-size: 11px;"><strong>GSTIN:</strong> <span contenteditable="true" style="min-width: 140px; display: inline-block;"></span></td>
                    </tr>
                    <tr>
                    <td style="border: 1.5px solid #000; padding: 5px 8px; font-size: 11px;"><strong>Mobile:</strong> <span contenteditable="true" style="min-width: 100px; display: inline-block;"></span></td>
                    <td style="border: 1.5px solid #000; padding: 5px 8px; font-size: 11px;"><strong>Mobile:</strong> <span contenteditable="true" style="min-width: 100px; display: inline-block;"></span></td>
                    </tr>
                    <tr>
                    <td style="border: 1.5px solid #000; padding: 5px 8px; font-size: 11px;"><strong>Booking Station:</strong> <span contenteditable="true" style="min-width: 100px; display: inline-block;"></span></td>
                    <td style="border: 1.5px solid #000; padding: 5px 8px; font-size: 11px;"><strong>Delivery Station:</strong> <span contenteditable="true" style="min-width: 100px; display: inline-block;"></span></td>
                    </tr>
                    <tr>
                    <td style="border: 1.5px solid #000; padding: 5px 8px; font-size: 11px;"><strong>Vehicle No:</strong> <span contenteditable="true" style="min-width: 100px; display: inline-block;"></span></td>
                    <td style="border: 1.5px solid #000; padding: 5px 8px; font-size: 11px;"><strong>Delivery Instruction:</strong> <span contenteditable="true" style="min-width: 100px; display: inline-block;"></span></td>
                    </tr>
                    <tr>
                    <td style="border: 1.5px solid #000; padding: 5px 8px; font-size: 11px;"><strong>Actual Weight (Kgs):</strong> <span contenteditable="true" style="min-width: 50px; display: inline-block;"></span></td>
                    <td style="border: 1.5px solid #000; padding: 5px 8px; font-size: 11px;"><strong>Amount Charged:</strong> <span contenteditable="true" style="min-width: 100px; display: inline-block;"></span></td>
                    <td style="border: 1.5px solid #000; background: #ecfeff; padding: 0;"></td>
                </tr>
                <!-- PARTICULARS Row -->
                <tr>
                    <th colspan="2" style="background: #0c1a3a; color: white; border: 1.5px solid #000; padding: 6px; font-size: px; height: 26px;">PARTICULARS</th>
                </tr>
                <tr>
                    <td colspan="2" style="border: 1.5px solid #000; vertical-align: top; padding: 8px; height: 180px;">
                        <div contenteditable="true" style="width: 100%; min-height: 160px; outline: none; font-size: 25px;font-weight: bold; line-height: 1.6;"></div>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Summary Footer -->
        <div style="margin-top: 15px; font-size: 14px; padding-bottom: 4px; border-bottom: 1.5px solid #0c1a3a; display: flex; justify-content: space-between;">
            <div><strong>Received Amount in words:</strong> <span id="grand-total-words" style="text-transform: capitalize; padding-left: 8px; font-weight: 500;">Zero Rupees Only</span></div>
            <div style="font-weight: bold;">.</div>
        </div>
    `,
  quotation: `
        <div class="doc-title">Quotation</div>

        <!-- Client Info Grid -->
        <table class="client-info-table" style="margin-bottom: 12px;">
            <tr>
                <td class="label-cell" style="width:100px; vertical-align:top; padding:8px 10px;">Bill To</td>
                <td colspan="3" style="padding:8px 10px; vertical-align:top;">
                    <div contenteditable="true" style="width:100%; min-height:64px;"></div>
                </td>
            </tr>
            <tr>
                <td class="label-cell" style="padding:6px 10px;">Quotation No.</td>
                <td style="padding:6px 10px; width:200px;"><span contenteditable="true" id="quotation-no" style="font-weight:600; color:var(--brand-dark); min-width: 80px; display: inline-block; border-bottom: 1px solid #94a3b8;"></span></td>
                <td class="label-cell" style="padding:6px 10px; width:90px;">Date</td>
                <td style="padding:6px 10px;"><span contenteditable="true" class="date-field" style="min-width:100px;"></span></td>
            </tr>
            <tr>
                <td class="label-cell" style="padding:6px 10px;">Contact No.</td>
                <td style="padding:6px 10px;"><span contenteditable="true" style="min-width:140px;"></span></td>
                <td class="label-cell" style="padding:6px 10px;">Email</td>
                <td style="padding:6px 10px;"><span contenteditable="true" style="min-width:140px;"></span></td>
            </tr>
        </table>

        <!-- Intro -->
        <div class="intro-text">
            Dear Sir/Madam,
            Thanks for Choosing ARK Packers and Movers for Servicing on your need! We are delighted to Provide our Quote for shifting your Household articles/Office equipments from&nbsp;<span contenteditable="true" style="min-width:140px;"></span>&nbsp;to&nbsp;<span contenteditable="true" style="min-width:140px;"></span>.
        </div>

        <!-- Charge Table -->
        <table class="charge-table">
            <thead>
                <tr>
                    <th style="width:70%; text-align:left; padding:8px 12px;">PARTICULARS</th>
                    <th style="width:30%; text-align:right; padding:8px 12px;">Amount (₹)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Transportation Charges</td>
                    <td style="text-align:right;">
                        <span contenteditable="true" class="charge-amount" oninput="calculateTotal()"></span>
                    </td>
                </tr>
                <tr>
                    <td>Packing Materials and Charges</td>
                    <td style="text-align:right;">
                        <span contenteditable="true" class="charge-amount" oninput="calculateTotal()"></span>
                    </td>
                </tr>
                <tr>
                    <td>Loading (Floor: <span contenteditable="true" style="min-width:30px;"></span>)</td>
                    <td style="text-align:right;">
                        <span contenteditable="true" class="charge-amount" oninput="calculateTotal()"></span>
                    </td>
                </tr>
                <tr>
                    <td>Unloading (Floor: <span contenteditable="true" style="min-width:30px;"></span>)</td>
                    <td style="text-align:right;">
                        <span contenteditable="true" class="charge-amount" oninput="calculateTotal()"></span>
                    </td>
                </tr>
                <tr>
                    <td>Rearranging</td>
                    <td style="text-align:right;">
                        <span contenteditable="true" class="charge-amount" oninput="calculateTotal()"></span>
                    </td>
                </tr>
                <tr>
                    <td>Warehousing/ Car Transportation</td>
                    <td style="text-align:right;">
                        <span contenteditable="true" class="charge-amount" oninput="calculateTotal()"></span>
                    </td>
                </tr>
                <tr>
                    <td>A/C Assembling/De-assembling Charges</td>
                    <td style="text-align:right;">
                        <span contenteditable="true" class="charge-amount" oninput="calculateTotal()"></span>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr style="background: rgba(0,0,0,0.02);">
                    <td style="text-align:right; padding:8px 12px; font-weight:600;">Sub-Total</td>
                    <td style="text-align:right; padding:8px 12px; font-weight:600;">₹ <span id="qt-subtotal">0</span></td>
                </tr>
                <tr>
                    <td style="padding:8px 12px;">GST @ <span contenteditable="true" id="qt-gst-pct" oninput="calculateTotal()" style="min-width:28px; display:inline-block; border-bottom:1px dashed #94a3b8;"></span> %</td>
                    <td style="text-align:right; padding:8px 12px;">₹ <span id="qt-gst-amt">0</span></td>
                </tr>
                <tr class="total-row">
                    <td style="text-align:right; padding:8px 12px; letter-spacing:1px; background: var(--brand-dark); color: white;">Grand Total</td>
                    <td style="text-align:right; padding:8px 12px; font-size:14px; background: var(--brand-dark); color: white;">₹ <span id="grand-total">0</span></td>
                </tr>
                <tr class="words-row">
                    <td colspan="2" style="padding:7px 12px; border-top: 1px solid var(--border-color);">
                        <strong>In Words:</strong>&nbsp;<span id="grand-total-words" style="text-transform:capitalize;">Zero Rupees Only</span>
                    </td>
                </tr>
            </tfoot>
        </table>

        <!-- Signature Row -->
        <table class="sign-table">
            <tr>
                <td style="width:50%; vertical-align:top; padding-top:8px; font-size:12px; line-height:2;">
                    Date:&nbsp;<span contenteditable="true" class="date-field" style="min-width:90px;"></span><br>
                    Place:&nbsp;<span contenteditable="true" style="min-width:100px;"></span>
                </td>
                <td style="width:50%; text-align:center; padding-top:8px; font-size:12px;">
                    <div style="margin-top:26px; border-top:1px solid var(--border-strong); padding-top:6px;">
                        For ARK PACKERS AND MOVERS<br>
                        <span style="font-size:10px; color:var(--muted); letter-spacing:1px; text-transform:uppercase;">Authorized Signatory</span>
                    </div>
                </td>
            </tr>
        </table>

        <!-- Terms -->
        <div class="terms-conditions">
            <strong>Terms &amp; Conditions:</strong><br>
            1. <strong>GST will be Charged Extra.</strong>&nbsp; 2. Transit Insurance will be provided by the company on customer demand; if arranged by the customer the company will not be liable for any coverage on damages.&nbsp; 3. In case any physical damage is not noted on the equipment there will not be any coverage for electrical/mechanical defects.&nbsp; 4. Electrical/Electronic fittings, carpentry works done only on customer demand with extra charges.&nbsp; 5. Advance amount should be paid on confirmation of order; 80% of the payment should be provided before transportation and 20% will be collected after delivery.&nbsp; 6. Quotation is valid for only 30 days from date of issue.&nbsp; 7. Charges may vary in case of fuel price hike or transportation problems.&nbsp; 8. All goods will be moved only on <em>"AS IS WHERE IS"</em> basis.
        </div>
    `,

  receipt: `
        <!-- Receipt Badge -->
        <div style="text-align:center; margin: 10px 0 22px; color: #241683ff">
            <span class="receipt-badge">RECEIPT</span>
        </div>

        <div class="receipt-body" style="font-size: 16px; line-height: 2.8; padding: 20px 40px; text-align: left; border: 1px solid var(--border-color); border-radius: 8px; background: rgba(255,255,255,0.4); margin: 0 20px;">
            No: <span contenteditable="true" id="receipt-no" style="min-width: 80px; font-weight: 600;"></span> &nbsp;
            <br>
            Received with thanks from <span contenteditable="true" style="min-width: 450px; display: inline-block; font-weight: 600;"></span><br>
            the sum of Rupees <span contenteditable="true" style="min-width: 600px; display: inline-block; font-weight: 600;" id="amount-words"></span><br>
            by Cash / UPI / Cheque / DD No. <span contenteditable="true" style="min-width: 200px; font-weight: 600;"></span> Dated <span contenteditable="true" class="date-field" style="min-width: 120px; font-weight: 600;"></span><br>
            towards <span contenteditable="true" style="min-width: 250px; font-weight: 600;"></span> From <span contenteditable="true" style="min-width: 150px; font-weight: 600;"></span> to <span contenteditable="true" style="min-width: 150px; font-weight: 600;"></span>.
        </div>

        <!-- Amount + Signature -->
        <div class="sign-row" style="margin-top:36px; padding: 0 4px;">
            <div class="receipt-amount-pill">
                <span class="rupee-symbol">₹</span>
                <span contenteditable="true" style="min-width:140px; border:none; outline:none;" id="receipt-amount" oninput="updateReceiptWords()"></span>
            </div>
            <div style="text-align:center; font-size:12px;">
                <div style="margin-top:48px; border-top:1px solid var(--border-strong); padding-top:6px; min-width:200px;">
                    For ARK PACKERS AND MOVERS<br>
                    <span style="font-size:10px; color:var(--muted); letter-spacing:1px; text-transform:uppercase;">Authorized Signatory</span>
                </div>
            </div>
        </div>
    `,

  itemlist: `
        <!-- Doc No -->
        <div class="doc-no-line">No:&nbsp;<span contenteditable="true" id="itemlist-no" style="font-weight:400; min-width:110px;"></span></div>

        <!-- Title -->
        <div class="doc-title" style="font-size:16px; letter-spacing:2px;">TO WHOMSOEVER IT MAY CONCERN</div>

        <!-- Declaration -->
        <div class="declaration-text">
            Dear Sir/Madam;<br>
            Herewith, we declare that all the Goods are Used Household/Office articles and the below described goods are shifted from&nbsp;<span contenteditable="true" style="min-width:190px;"></span>&nbsp;to&nbsp;<span contenteditable="true" style="min-width:190px;"></span>. The below mentioned Goods does not have any Commercial value and not for sale.
        </div>

        <!-- Consignor / Consignee -->
        <table class="consignor-box" style="margin-top:12px;">
            <tr>
                <th>CONSIGNOR NAME AND ADDRESS</th>
                <th>CONSIGNEE NAME AND ADDRESS</th>
            </tr>
            <tr>
                <td><div class="consignor-name" contenteditable="true"></div></td>
                <td><div class="consignee-name" contenteditable="true"></div></td>
            </tr>
            <tr>
                <td style="padding:5px 8px; border-top:1px solid var(--border-color);">
                    <div style="margin-bottom:4px; line-height:1.7; font-size:12px;">Mobile:&nbsp;<span contenteditable="true" style="min-width:190px; border-bottom:1px dashed #94a3b8; display:inline-block;"></span></div>
                    
                </td>
                <td style="padding:5px 8px; border-top:1px solid var(--border-color);">
                    <div style="margin-bottom:4px; line-height:1.7; font-size:12px;">Mobile:&nbsp;<span contenteditable="true" style="min-width:190px; border-bottom:1px dashed #94a3b8; display:inline-block;"></span></div>
                    
                </td>
            </tr>
        </table>

        <!-- Row Count Controls -->
        <div class="no-print row-controls">
            <span style="font-weight:600; margin-right:8px; font-size:12px;">Table Rows:</span>
            <button onclick="changeRowsCount(20)">20 Rows</button>
            <button onclick="changeRowsCount(40)">40 Rows</button>
            <button onclick="changeRowsCount(60)">60 Rows</button>
        </div>

        <!-- Items Grid -->
        <table class="doc-table item-table" style="margin-top:6px; table-layout:fixed;" id="items-grid">
            <thead>
                <tr style="height:26px;">
                    <th style="width:8%;">SL NO</th>
                    <th style="width:32%;">PARTICULARS</th>
                    <th style="width:10%;">QTY</th>
                    <th style="width:8%;">SL NO</th>
                    <th style="width:32%;">PARTICULARS</th>
                    <th style="width:10%;">QTY</th>
                </tr>
            </thead>
            <tbody id="items-body">
                <!-- Rows generated by JS -->
            </tbody>
        </table>

        <!-- Footer / Signature strip -->
        <table class="itemlist-footer">
            <tr>
                <td style="width:33%; border-right:1px solid var(--border-color);">
                    Date:&nbsp;<span contenteditable="true" class="date-field" style="min-width:90px;"></span><br>
                    Place:&nbsp;<span contenteditable="true" style="min-width:95px;"></span><br>
                    Truck No:&nbsp;<span contenteditable="true" style="min-width:90px;"></span><br>
                    Driver Name:&nbsp;<span contenteditable="true" style="min-width:80px;"></span><br>
                    Driver Mobile:&nbsp;<span contenteditable="true" style="min-width:80px;"></span>
                </td>
                <td style="width:33%; text-align:center; border-right:1px solid var(--border-color); vertical-align:bottom;">
                    <div style="margin-top:44px; border-top:1px solid var(--border-strong); padding-top:6px; font-size:11px; color:var(--muted); letter-spacing:1px; text-transform:uppercase;">Consignor Signature</div>
                </td>
                <td style="width:34%; text-align:center; vertical-align:bottom;">
                    <div style="margin-top:44px; border-top:1px solid var(--border-strong); padding-top:6px; font-size:12px;">
                        For ARK PACKERS &amp; MOVERS<br>
                        <span style="font-size:10px; color:var(--muted); letter-spacing:1px; text-transform:uppercase;">Authorized Signatory</span>
                    </div>
                </td>
            </tr>
        </table>
    `,
};

let currentTemplate = "quotation";
function getFinancialYear() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  // Financial year starts April
  if (month >= 4) {
    return year + 1;
  } else {
    return year;
  }
}

function generateQuotationNo() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  const fyStart = month >= 4 ? year : year - 1;
  const fyEnd = fyStart + 1;

  const counterKey = "qt_counter_" + fyStart;

  let counter = parseInt(localStorage.getItem(counterKey) || "0");
  counter++;
  localStorage.setItem(counterKey, counter);

  const padded = counter.toString().padStart(3, "0");
  const fyLabel =
    fyStart.toString().slice(-2) + "-" + fyEnd.toString().slice(-2);

  return `QT-${fyLabel}/${padded}`;
}

let sessionQuoteNo = generateQuotationNo();

function generateInvoiceNo() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 1 = Jan, 4 = April

  // Indian Financial Year: April 1 of year X to March 31 of year X+1
  // FY start year: if month >= 4, it's the current year; else previous year
  const fyStart = month >= 4 ? year : year - 1;
  const fyEnd = fyStart + 1;

  const counterKey = "inv_counter_" + fyStart;

  let counter = parseInt(localStorage.getItem(counterKey) || "0");
  counter++;
  localStorage.setItem(counterKey, counter);

  const padded = counter.toString().padStart(3, "0");
  const fyLabel =
    fyStart.toString().slice(-2) + "-" + fyEnd.toString().slice(-2);

  return `IN-${fyLabel}/${padded}`;
}

let sessionInvoiceNo = generateInvoiceNo();

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Load last active template or default to quotation
  const lastTemplate =
    localStorage.getItem("ark_packers_last_template") || "quotation";
  switchTemplate(lastTemplate);
  applyTodayDate();
});

// Primary Template Switcher
function switchTemplate(type) {
  currentTemplate = type;
  localStorage.setItem("ark_packers_last_template", type);
  const container = document.getElementById("template-content");
  const pageContainer = document.getElementById("document-container");

  container.innerHTML = templates[type];

  // Handle Orientation
  const isLandscape = type === "invoice" || type === "receipt";
  if (isLandscape) {
    pageContainer.classList.add("landscape");
    document.body.classList.add("landscape-print");
  } else {
    pageContainer.classList.remove("landscape");
    document.body.classList.remove("landscape-print");
  }

  // Post-render actions
  applyTodayDate();

  if (type === "itemlist") {
    renderItemRows(40); // default 40 rows (spec: 1-20 left, 21-40 right)
  }

  // Load previously saved data for this specific template
  loadData();

  // Stamp auto-generated numbers AFTER loadData so they aren't overwritten.
  // If the saved HTML is old (missing IDs), clear it and re-render fresh.
  if (type === "quotation") {
    const quoteEl = document.getElementById("quotation-no");
    if (quoteEl) quoteEl.innerText = sessionQuoteNo;
  } else if (type === "invoice") {
    const invEl = document.getElementById("invoice-no");
    if (invEl) invEl.innerText = sessionInvoiceNo;
    calculateTotal();
  } else if (type === "receipt") {
    let recNoEl = document.getElementById("receipt-no");
    if (!recNoEl) {
      // Old saved HTML lacks the ID — clear stale data and reload fresh
      localStorage.removeItem("ark_packers_data_receipt");
      container.innerHTML = templates["receipt"];
      applyTodayDate();
      recNoEl = document.getElementById("receipt-no");
    }
    if (recNoEl) recNoEl.innerText = sessionInvoiceNo;
  } else if (type === "itemlist") {
    let itemNoEl = document.getElementById("itemlist-no");
    if (!itemNoEl) {
      // Old saved HTML lacks the ID — clear stale data and reload fresh
      localStorage.removeItem("ark_packers_data_itemlist");
      container.innerHTML = templates["itemlist"];
      applyTodayDate();
      renderItemRows(40);
      itemNoEl = document.getElementById("itemlist-no");
    }
    if (itemNoEl) itemNoEl.innerText = sessionInvoiceNo;
  }
}

// Data Persistence (LocalStorage)
function saveData() {
  const content = document.getElementById("template-content").innerHTML;
  // We save the entire innerHTML to preserve user edits in contenteditable fields
  localStorage.setItem("ark_packers_data_" + currentTemplate, content);

  // Also save global fields like GSTIN
  const gstinEl = document.getElementById("gstin-val");
  if (gstinEl) {
    localStorage.setItem("ark_packers_gstin", gstinEl.innerText);
  }
}

function loadData() {
  const saved = localStorage.getItem("ark_packers_data_" + currentTemplate);
  if (saved) {
    document.getElementById("template-content").innerHTML = saved;
    // Re-attach calculations if needed
    if (currentTemplate === "quotation") calculateTotal();
  }

  // Load global fields
  const savedGstin = localStorage.getItem("ark_packers_gstin");
  const gstinEl = document.getElementById("gstin-val");
  if (savedGstin && gstinEl) {
    gstinEl.innerText = savedGstin;
  }
}

// Auto-save on any input or change
document.addEventListener("input", (e) => {
  if (
    e.target.hasAttribute("contenteditable") ||
    e.target.classList.contains("charge-amount")
  ) {
    saveData();
  }
});

document.addEventListener(
  "blur",
  (e) => {
    if (e.target.hasAttribute("contenteditable")) {
      saveData();
    }
  },
  true,
);

// Reset Form Data
function resetForm() {
  if (
    confirm(
      "Are you sure you want to clear all entered data for this " +
        currentTemplate +
        "?",
    )
  ) {
    localStorage.removeItem("ark_packers_data_" + currentTemplate);
    switchTemplate(currentTemplate);
  }
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Auto-fill today's date
function applyTodayDate() {
  const today = new Date();
  const formatted =
    today.getDate().toString().padStart(2, "0") +
    "/" +
    (today.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    today.getFullYear();
  const dateFields = document.querySelectorAll(".date-field");
  dateFields.forEach((field) => {
    if (!field.innerText.trim()) {
      field.innerText = formatted;
    }
  });
}

// Auto Calculate Grand Total
function calculateTotal() {
  const chargeFields = document.querySelectorAll(".charge-amount");
  let subtotal = 0;

  chargeFields.forEach((field) => {
    let value = field.innerText.replace(/[^\d.]/g, "");
    subtotal += Number(value) || 0;
  });

  // Update Subtotal (Invoice template)
  const subTotalEl = document.getElementById("sub-total");
  if (subTotalEl) {
    subTotalEl.innerText = subtotal.toLocaleString("en-IN");
  }

  // Update Subtotal (Quotation template)
  const qtSubtotalEl = document.getElementById("qt-subtotal");
  if (qtSubtotalEl) {
    qtSubtotalEl.innerText = subtotal.toLocaleString("en-IN");
  }

  // ── Invoice GST ──
  const cgst = Number(document.getElementById("cgst-pct")?.innerText) || 0;
  const sgst = Number(document.getElementById("sgst-pct")?.innerText) || 0;
  const igst = Number(document.getElementById("igst-pct")?.innerText) || 0;
  const cgstAmount = subtotal * (cgst / 100);
  const sgstAmount = subtotal * (sgst / 100);
  const igstAmount = subtotal * (igst / 100);

  const fmt = (v) =>
    v.toLocaleString("en-IN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  const cgstAmtEl = document.getElementById("cgst-amt");
  const sgstAmtEl = document.getElementById("sgst-amt");
  const igstAmtEl = document.getElementById("igst-amt");
  if (cgstAmtEl) cgstAmtEl.innerText = fmt(cgstAmount);
  if (sgstAmtEl) sgstAmtEl.innerText = fmt(sgstAmount);
  if (igstAmtEl) igstAmtEl.innerText = fmt(igstAmount);

  // ── Quotation GST ──
  const qtGst = Number(document.getElementById("qt-gst-pct")?.innerText) || 0;
  const qtGstAmt = subtotal * (qtGst / 100);

  const qtGstEl = document.getElementById("qt-gst-amt");
  if (qtGstEl)
    qtGstEl.innerText = qtGstAmt.toLocaleString("en-IN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

  // Grand Total (works for both templates — only one set of elements will be present)
  const grandTotal = document.getElementById("qt-gst-pct")
    ? subtotal + qtGstAmt
    : subtotal + cgstAmount + sgstAmount + igstAmount;

  // Update Grand Total
  const grandTotalEl = document.getElementById("grand-total");
  if (grandTotalEl) {
    grandTotalEl.innerText = Math.round(grandTotal).toLocaleString("en-IN");
  }

  // Update Amount in Words
  const grandTotalWordsEl = document.getElementById("grand-total-words");
  if (grandTotalWordsEl) {
    grandTotalWordsEl.innerText =
      grandTotal > 0
        ? numberToWords(Math.round(grandTotal)) + " Rupees Only"
        : "Zero Rupees Only";
  }
}

// Receipt Number to Words
function updateReceiptWords() {
  const amountEl = document.getElementById("receipt-amount");
  const wordsEl = document.getElementById("amount-words");

  if (amountEl && wordsEl) {
    let val = parseInt(amountEl.innerText.trim().replace(/,/g, "")) || 0;
    if (val > 0) {
      wordsEl.innerText = numberToWords(val) + " Rupees Only";
    } else {
      wordsEl.innerText = "";
    }
  }
}

// Item List - Dynamic Rows
function changeRowsCount(count) {
  renderItemRows(count);
}

function renderItemRows(totalItems) {
  const tbody = document.getElementById("items-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  // 2 columns of items (e.g., 1-20 left, 21-40 right if total is 40)
  let half = Math.ceil(totalItems / 2);

  for (let i = 1; i <= half; i++) {
    let tr = document.createElement("tr");
    tr.style.height = "22px";

    // Left Side
    tr.innerHTML += `
            <td style="text-align: center; font-size: 11px; padding: 1px;">${i}</td>
            <td><div contenteditable="true" style="width: 100%; border: none; outline: none; font-size: 11px; padding: 1px;"></div></td>
            <td><div contenteditable="true" style="width: 100%; border: none; outline: none; font-size: 11px; text-align: center; padding: 1px;"></div></td>
        `;

    // Right Side
    let rightIndex = i + half;
    if (rightIndex <= totalItems) {
      tr.innerHTML += `
                <td style="text-align: center; font-size: 11px; padding: 1px;">${rightIndex}</td>
                <td><div contenteditable="true" style="width: 100%; border: none; outline: none; font-size: 11px; padding: 1px;"></div></td>
                <td><div contenteditable="true" style="width: 100%; border: none; outline: none; font-size: 11px; text-align: center; padding: 1px;"></div></td>
            `;
    } else {
      tr.innerHTML += `<td></td><td></td><td></td>`;
    }

    tbody.appendChild(tr);
  }
}

// Utility: Number to Indian Words
function numberToWords(num) {
  if (num === 0) return "Zero";

  const a = [
    "",
    "One ",
    "Two ",
    "Three ",
    "Four ",
    "Five ",
    "Six ",
    "Seven ",
    "Eight ",
    "Nine ",
    "Ten ",
    "Eleven ",
    "Twelve ",
    "Thirteen ",
    "Fourteen ",
    "Fifteen ",
    "Sixteen ",
    "Seventeen ",
    "Eighteen ",
    "Nineteen ",
  ];
  const b = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  let n = ("000000000" + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return "";

  let str = "";
  str +=
    Number(n[1]) !== 0
      ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "Crore "
      : "";
  str +=
    Number(n[2]) !== 0
      ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "Lakh "
      : "";
  str +=
    Number(n[3]) !== 0
      ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "Thousand "
      : "";
  str +=
    Number(n[4]) !== 0
      ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "Hundred "
      : "";

  if (Number(n[5]) !== 0) {
    str += str !== "" ? "and " : "";
    str += a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]];
  }

  return str.trim();
}

// Export/Import Features
function exportData() {
  const data = {
    quotation: localStorage.getItem("ark_packers_data_quotation"),
    receipt: localStorage.getItem("ark_packers_data_receipt"),
    itemlist: localStorage.getItem("ark_packers_data_itemlist"),
    gstin: localStorage.getItem("ark_packers_gstin"),
    lastTemplate: localStorage.getItem("ark_packers_last_template"),
    timestamp: new Date().toISOString(),
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ARK_Data_Backup_${new Date().toLocaleDateString().replace(/\//g, "-")}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function triggerImport() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.quotation)
          localStorage.setItem("ark_packers_data_quotation", data.quotation);
        if (data.receipt)
          localStorage.setItem("ark_packers_data_receipt", data.receipt);
        if (data.itemlist)
          localStorage.setItem("ark_packers_data_itemlist", data.itemlist);
        if (data.gstin) localStorage.setItem("ark_packers_gstin", data.gstin);
        if (data.lastTemplate)
          localStorage.setItem("ark_packers_last_template", data.lastTemplate);

        alert("Data imported successfully! Refreshing template...");
        switchTemplate(currentTemplate);
      } catch (err) {
        alert("Invalid backup file.");
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

function printDocument() {
  const originalTitle = document.title;
  let filename = "ARK_Document";

  if (currentTemplate === "quotation") {
    const el = document.getElementById("quotation-no");
    if (el && el.innerText.trim())
      filename = "Quotation_" + el.innerText.trim();
  } else if (currentTemplate === "invoice") {
    const el = document.getElementById("invoice-no");
    if (el && el.innerText.trim()) filename = "Invoice_" + el.innerText.trim();
  } else if (currentTemplate === "receipt") {
    const el = document.getElementById("receipt-no");
    if (el && el.innerText.trim()) filename = "Receipt_" + el.innerText.trim();
  } else if (currentTemplate === "itemlist") {
    const el = document.getElementById("itemlist-no");
    if (el && el.innerText.trim()) filename = "ItemList_" + el.innerText.trim();
  }

  // Sanitize filename
  filename = filename.replace(/[/\\?%*:|"<>]/g, "-");

  document.title = filename;
  window.print();

  // Restore title after a brief delay so the print dialog captures it
  setTimeout(() => {
    document.title = originalTitle;
  }, 1000);
}
