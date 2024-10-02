package com.app.portfolio.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SwaggerConfig {


    @Bean
    public OpenAPI api() {
        return new OpenAPI()
                .info(new Info()
                        .title("Portfolio REST API Document")
                        .description("Portfolio")
                        .version("1.0"))
                .servers(List.of(
                        new Server().url("http://localhost:8181").description("Local Server"),
                        new Server().url("https://portfolio-ilke.onrender.com").description("Stag Server")
                ))
                .addSecurityItem(new SecurityRequirement().addList("jwtToken"))
                .components(new io.swagger.v3.oas.models.Components()
                        .addSecuritySchemes("jwtToken", new SecurityScheme()
                                .name("Authorization")
                                .type(SecurityScheme.Type.APIKEY)
//                                .scheme("bearer")
//                                .type(SecurityScheme.Type.HTTP)
                                .in(SecurityScheme.In.HEADER)));
    }


}
