package com.app.portfolio.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Education")
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer educationId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String degree;
    private String institution;
    private Integer startYear;
    private Integer endYear;

    // Getters and Setters
}

