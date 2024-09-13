package com.app.portfolio.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Skills")
public class Skills {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer skillId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String skillName;
    private Integer proficiency;

    // Getters and Setters
}

