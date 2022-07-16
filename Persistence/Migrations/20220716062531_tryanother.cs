using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class tryanother : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "VWGolfs",
                
                columns: table => new
                {
                    vwg_id = table.Column<int>(type: "int", nullable: false).Annotation("SqlServer:Identity", "1, 1"),
                    vwg_targa = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    vwg_image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    vwg_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    vwg_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    vwg_year = table.Column<int>(type: "int", nullable: false),
                    vwg_vin = table.Column<int>(type: "int", nullable: false),
                    vwg_price = table.Column<double>(type: "float", nullable: false),
                    description_vwg = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VWGolfs", x => x.vwg_id);
                });

            migrationBuilder.CreateTable(
                name: "VWPassats",
                columns: table => new
                {
                    vwp_id = table.Column<int>(type: "int", nullable: false).Annotation("SqlServer:Identity", "1, 1"),
                    vwp_targa = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    vwp_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    vwp_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    vwp_year = table.Column<int>(type: "int", nullable: false),
                    vwp_vin = table.Column<int>(type: "int", nullable: false),
                    vwp_price = table.Column<double>(type: "float", nullable: false),
                    description_vwp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VWPassats", x => x.vwp_id);
                });
                migrationBuilder.CreateTable(
                name: "AudiAs",
                columns: table => new
                {
                    aa_id = table.Column<int>(type: "int", nullable: false).Annotation("SqlServer:Identity", "1, 1"),
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
                    rr_id = table.Column<int>(type: "int", nullable: false).Annotation("SqlServer:Identity", "1, 1"),
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

        }
    }
}
