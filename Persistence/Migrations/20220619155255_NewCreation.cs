using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class NewCreation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Feedbacks",
                columns: table => new
                {
                    fb_id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    fb_image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    name_fb = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    email_fb = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    text_fb = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Feedbacks", x => x.fb_id);
                });

            migrationBuilder.CreateTable(
                name: "VWGolfs",
                columns: table => new
                {
                    vwg_id = table.Column<string>(type: "nvarchar(450)", nullable: false),
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
                    vwp_id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    vwp_image = table.Column<string>(type: "nvarchar(max)", nullable: true),
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Feedbacks");

            migrationBuilder.DropTable(
                name: "VWGolfs");

            migrationBuilder.DropTable(
                name: "VWPassats");
        }
    }
}
