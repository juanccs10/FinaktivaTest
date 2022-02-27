namespace FinaktivaApi.Models
{
    public class Client
    {
        public long ClientId { get; set; }
        public string FullName { get; set; }
        public string IdentificationType { get; set; }
        public string Identification { get; set; }
        public string? SocialReasoning { get; set; }
        public long? Providers { get; set; }
        public long? LastYearSales { get; set; }

    }
}
