namespace FinaktivaApi.Context
{
    using Microsoft.EntityFrameworkCore;
    using FinaktivaApi.Models;

    public class FinaktivaContext
        : DbContext
    {
        public FinaktivaContext(DbContextOptions options)
            : base(options)
        {

        }

        public DbSet<Client> Client { get; set; } = null!;
    }
}
