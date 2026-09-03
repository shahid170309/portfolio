package com.shahid.portfolio.repository;

import com.shahid.portfolio.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Long> {
}