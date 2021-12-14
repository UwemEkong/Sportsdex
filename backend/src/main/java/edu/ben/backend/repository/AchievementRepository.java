package edu.ben.backend.repository;

import edu.ben.backend.model.Achievement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AchievementRepository extends JpaRepository<Achievement, Long> {

    public Optional<Achievement> findById(Long id);

}