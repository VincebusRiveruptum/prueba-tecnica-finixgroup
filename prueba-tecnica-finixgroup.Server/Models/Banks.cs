﻿namespace prueba_tecnica_finixgroup.Server.Models {
    public class Bank {
        public int id { get; set; }
        public Guid uid { get; set; }
        public string? account_number { get; set; }
        public string? IBAN { get; set; }
        public string? bank_name { get; set; }
        public string? routing_number { get; set; }
        public string? swift_bic { get; set; }
    }
}
