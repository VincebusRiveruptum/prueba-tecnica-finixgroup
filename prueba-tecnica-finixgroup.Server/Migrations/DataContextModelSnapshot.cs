﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using prueba_tecnica_finixgroup.Helpers;

#nullable disable

namespace prueba_tecnica_finixgroup.Server.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.0");

            modelBuilder.Entity("prueba_tecnica_finixgroup.Server.Models.Bank", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("date()");

                    b.Property<DateTime?>("DeletedAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("IBAN")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("UpdatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("date()");

                    b.Property<string>("account_number")
                        .HasColumnType("TEXT");

                    b.Property<string>("bank_name")
                        .HasColumnType("TEXT");

                    b.Property<string>("routing_number")
                        .HasColumnType("TEXT");

                    b.Property<string>("swift_bic")
                        .HasColumnType("TEXT");

                    b.Property<string>("uid")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("lower(hex(randomblob(16)))");

                    b.HasKey("id");

                    b.ToTable("Banks");
                });
#pragma warning restore 612, 618
        }
    }
}
