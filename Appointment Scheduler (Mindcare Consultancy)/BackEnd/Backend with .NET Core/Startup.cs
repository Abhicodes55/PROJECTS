using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using sprint2.Models;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;
using Microsoft.OpenApi.Models;
using System;
using Microsoft.AspNetCore.Identity;

namespace sprint2
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddSwaggerGen(x =>
            {
                x.SwaggerDoc("v2", new OpenApiInfo { Title = "Sprint2", Version = "v2" });
                x.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "Please enter token enter 'bearer' [space] <token>"
                });
              

                x.AddSecurityRequirement(new OpenApiSecurityRequirement {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference=new OpenApiReference
                            {
                                 Type=ReferenceType.SecurityScheme,
                                 Id="Bearer"
                            }
                        },
                        new string[]{ }
                    }
                });
            });
           
           
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
                options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        
                       ValidIssuer = Configuration["jwt:validIssuer"],
                        ValidAudience = Configuration["jwt:ValidAudince"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["jwt:Key"])),
                        ClockSkew =TimeSpan.Zero
                    };
                });
             
            services.AddControllers();
            services.AddDbContext<CommonContext>(options =>
              options.UseSqlServer(Configuration["ConnectionStrings:DefaultConnection"]));

            

           
          

            services.AddSwaggerGen();
            services.AddCors(options =>
            {
                options.AddPolicy(name: "AllowOrigin", ApplicationBuilder => {
                    ApplicationBuilder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
                });
            });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseAuthentication();

            app.UseRouting();
            app.UseCors("AllowOrigin");
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseSwagger();
            app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v2/swagger.json", "Customer app v2"); });
           
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
