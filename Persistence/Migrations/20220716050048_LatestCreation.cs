using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class LatestCreation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AudiAs",
                columns: table => new
                {
                    aa_id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    aa_image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    aa_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    aa_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    aa_year = table.Column<int>(type: "int", nullable: false),
                    aa_vin = table.Column<int>(type: "int", nullable: false),
                    aa_price = table.Column<double>(type: "float", nullable: false),
                    aa_engine = table.Column<double>(type: "float", nullable: false),
                    description_aa = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    aa_fuel = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AudiAs", x => x.aa_id);
                });

            migrationBuilder.CreateTable(
                name: "RollsRoyces",
                columns: table => new
                {
                    rr_id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    rr_image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    rr_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    rr_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    rr_year = table.Column<int>(type: "int", nullable: false),
                    rr_vin = table.Column<int>(type: "int", nullable: false),
                    rr_price = table.Column<double>(type: "float", nullable: false),
                    rr_engine = table.Column<double>(type: "float", nullable: false),
                    description_rr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    rr_fuel = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RollsRoyces", x => x.rr_id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AudiAs");

            migrationBuilder.DropTable(
                name: "RollsRoyces");
        }
    }
}
