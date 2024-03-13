namespace prueba_tecnica_finixgroup.Helpers;

using Microsoft.EntityFrameworkCore;
using prueba_tecnica_finixgroup.Server.Models;
using System.Net.Http;
using System.Text.Json;


public class DataContext : DbContext{

    protected readonly IConfiguration Configuration;
    public DataContext(IConfiguration configuration) {
        Configuration = configuration;
 
    }
    protected override void OnConfiguring(DbContextOptionsBuilder options){
        // in memory database used for simplicity, change to a real db for production applications
        options.UseSqlite(Configuration.GetConnectionString("WebApiDatabase"));
    }

    // Fix banks validation but outside this method, just a temporal quick and dirty solution...
    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        base.OnModelCreating(modelBuilder);
        /*
        if(!Banks.Any()) {
            modelBuilder.Entity<Bank>().HasData(
                Seed()
             );         
        }
        */
    }
 
    public Bank[] Seed() {
        using(var httpClient = new HttpClient()) {
            httpClient.BaseAddress = new Uri("https://random-data-api.com/api/v2/");
            HttpResponseMessage response = httpClient.GetAsync("banks?size=100").Result;

            if(response.IsSuccessStatusCode) {
                string jsonResponse = response.Content.ReadAsStringAsync().Result;
                var banks = JsonSerializer.Deserialize<Bank[]>(jsonResponse);

                Console.WriteLine(jsonResponse);
                if(banks != null) {
                    return banks;
                } else {
                    return null;
                }
            } else {
                Console.WriteLine("Failed to fetch data from the API. Status code: " + response.StatusCode);
                return null;
            }
        }
    }

    public DbSet<Bank> Banks { get; set; }
}